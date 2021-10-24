@echo off

if exist C:\Python39\ 
    (
        echo "Python 3.9.6 already installed."
    )
else 
    (
        echo "Installing Python 3.9.6..."
        powershell -command "(New-Object Net.WebClient).DownloadFile('https://www.python.org/ftp/python/3.9.6/python-3.9.6-amd64.exe')"
    )

echo "Installation complete!"