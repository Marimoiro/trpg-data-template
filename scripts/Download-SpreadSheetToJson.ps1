param(
    [uri]$SpreadSheetPublishedUri
)

$tempFile = New-TemporaryFile
Invoke-WebRequest -Uri $SpreadSheetPublishedUri -OutFile $tempFile

Get-Content -Raw $tempFile | ConvertFrom-Csv | ConvertTo-Json
