
$EffectsUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOMzn15lwry1dgLW9W5ZBoHry2pl6rMf4xdHTvHkq0CeL225Q0qFRklVGfJ6zUdcv6Z6sGK7YUmUz/pub?gid=1196424371&single=true&output=csv"
$DRoycesUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOMzn15lwry1dgLW9W5ZBoHry2pl6rMf4xdHTvHkq0CeL225Q0qFRklVGfJ6zUdcv6Z6sGK7YUmUz/pub?gid=1947053862&single=true&output=csv"
$DetailsUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOMzn15lwry1dgLW9W5ZBoHry2pl6rMf4xdHTvHkq0CeL225Q0qFRklVGfJ6zUdcv6Z6sGK7YUmUz/pub?gid=1203551871&single=true&output=csv"
$UniqueItemUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOMzn15lwry1dgLW9W5ZBoHry2pl6rMf4xdHTvHkq0CeL225Q0qFRklVGfJ6zUdcv6Z6sGK7YUmUz/pub?gid=686984489&single=true&output=csv"

$ContactUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOMzn15lwry1dgLW9W5ZBoHry2pl6rMf4xdHTvHkq0CeL225Q0qFRklVGfJ6zUdcv6Z6sGK7YUmUz/pub?gid=1184365142&single=true&output=csv"
$LicensesUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOMzn15lwry1dgLW9W5ZBoHry2pl6rMf4xdHTvHkq0CeL225Q0qFRklVGfJ6zUdcv6Z6sGK7YUmUz/pub?gid=876019519&single=true&output=csv"


$outDir = $PSScriptRoot +  "/../src/data/"

mkdir -Force -Path $outDir

$dataSet = @(
    @{ uri = $EffectsUri; out = "effects" },
    @{ uri = $DRoycesUri; out = "droyces" },
    @{ uri = $DetailsUri; out = "details" },
    @{ uri = $UniqueItemUri; out = "uniqueItems" }
    @{ uri = $ContactUri; out = "contacts" }
    @{ uri = $LicensesUri; out = "licenses" }
)

$dataSet[0].out

$dataSet | %{ Write-Host $_["uri"] ; & $PSScriptRoot\Download-SpreadSheetToJson.ps1 -SpreadSheetPublishedUri $_.uri > "$outDir/$($_.out).json" }
