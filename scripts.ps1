param (
    [string]$Comando,
    [string]$WorkingDirectory
)

# Verifica se esta executando como administrador
if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Script nao esta sendo executado como administrador. Reiniciando com privilegios elevados..." -ForegroundColor Yellow
    
    # Captura o diretorio atual
    $currentDir = Get-Location
    
    # Monta os argumentos preservando o parametro -Comando e diretorio se existir
    $arguments = "-ExecutionPolicy Bypass -File `"$PSCommandPath`" -WorkingDirectory `"$currentDir`""
    if ($PSBoundParameters.ContainsKey('Comando')) {
        $arguments += " -Comando `"$Comando`""
    }
    
    # Reinicia o script como administrador
    Start-Process powershell.exe -ArgumentList $arguments -Verb RunAs
    exit
}

# A partir daqui, o script esta rodando como administrador
Write-Host "Script executando como administrador." -ForegroundColor Green

# Define o diretorio de trabalho correto
if ($WorkingDirectory) {
    Set-Location $WorkingDirectory
    Write-Host "Diretorio de trabalho: $WorkingDirectory" -ForegroundColor Cyan
} else {
    # Se nao foi passado, usa o diretorio do script
    $scriptDir = Split-Path -Parent $PSCommandPath
    Set-Location $scriptDir
    Write-Host "Diretorio de trabalho: $scriptDir" -ForegroundColor Cyan
}

$NodeVersion = '22.12'

if ($PSBoundParameters.ContainsKey('Comando')) {
    # Configura o Node.js no processo filho
    Write-Host "Configurando Node.js v$NodeVersion no processo atual..."
    nvm use $NodeVersion
    
    switch ($Comando) {
        'install' { 
            Write-Host "Instalando dependencias..."
            Write-Host "Diretorio atual: $(Get-Location)" -ForegroundColor Yellow
            npm install 
        }
        'start' { 
            Write-Host "Executando o ambiente de desenvolvimento Web..."
            Write-Host "Diretorio atual: $(Get-Location)" -ForegroundColor Yellow
            npm install
            npm run dev 
        }
        'build' { 
            Write-Host "Executando o ambiente de desenvolvimento Web..."
            Write-Host "Diretorio atual: $(Get-Location)" -ForegroundColor Yellow
            npm install
            npm run build 
        }
        'preview' { 
            Write-Host "Executando o ambiente de preview Web..."
            Write-Host "Diretorio atual: $(Get-Location)" -ForegroundColor Yellow
            npm install
            npm run preview:open
        }
        default { 
            Write-Host "Comando '$Comando' invalido." -ForegroundColor Red 
        }
    }
    
    # Pausa antes de fechar (util para ver mensagens de erro)
    Write-Host "`nPressione qualquer tecla para fechar..." -ForegroundColor Cyan
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
else {
    $opcoes = "install", "start", "build", "preview", "exit"

    while ($true) {
        Write-Host "`nPor favor, escolha um comando para executar:"
        for ($i = 0; $i -lt $opcoes.Count; $i++) {
            Write-Host ("{0}. {1}" -f ($i + 1), $opcoes[$i])
        }
        
        $escolha = Read-Host "Opcao"

        if ([int]::TryParse($escolha, [ref]$null) -and [int]$escolha -ge 1 -and [int]$escolha -le $opcoes.Count) {
            $indice = [int]$escolha - 1
            $opcaoSelecionada = $opcoes[$indice]

            if ($opcaoSelecionada -eq "exit") {
                Write-Host "Finalizando script..."
                break
            }
            
            Write-Host "Configurando ambiente com Node.js v$NodeVersion..."
            nvm install $NodeVersion
            nvm use $NodeVersion
            
            # Captura o diretorio atual antes de chamar o processo filho
            $currentDir = Get-Location
            
            Write-Host "Ambiente configurado. Executando o comando '$opcaoSelecionada' em um novo processo..."
            
            powershell -ExecutionPolicy Bypass -File $PSCommandPath -Comando $opcaoSelecionada -WorkingDirectory $currentDir
            
            break
        }
        else {
            Write-Host "Opcao invalida. Por favor, tente novamente." -ForegroundColor Red
        }
    }
}