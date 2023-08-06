
# 解説シートのurlを貼ります
$DetailsUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm5ulwSRtrDNyck1hsB1EjR6vzNnu-bX3wjSjXGG46J0v7fwxYrrLA7FD48wKXZ7fxtWgLa7N79sgq/pub?gid=1203551871&single=true&output=csv"

# エフェクトのurlを貼ります
$EffectsUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm5ulwSRtrDNyck1hsB1EjR6vzNnu-bX3wjSjXGG46J0v7fwxYrrLA7FD48wKXZ7fxtWgLa7N79sgq/pub?gid=1196424371&single=true&output=csv"

# Dロイスのurlを貼ります
$DRoycesUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm5ulwSRtrDNyck1hsB1EjR6vzNnu-bX3wjSjXGG46J0v7fwxYrrLA7FD48wKXZ7fxtWgLa7N79sgq/pub?gid=1947053862&single=true&output=csv"

# アイテムのurlを貼ります
$UniqueItemUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm5ulwSRtrDNyck1hsB1EjR6vzNnu-bX3wjSjXGG46J0v7fwxYrrLA7FD48wKXZ7fxtWgLa7N79sgq/pub?gid=686984489&single=true&output=csv"

# 連絡先のurlを貼ります
$ContactUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm5ulwSRtrDNyck1hsB1EjR6vzNnu-bX3wjSjXGG46J0v7fwxYrrLA7FD48wKXZ7fxtWgLa7N79sgq/pub?gid=1184365142&single=true&output=csv"

# ライセンスのurlを貼ります
$LicensesUri = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm5ulwSRtrDNyck1hsB1EjR6vzNnu-bX3wjSjXGG46J0v7fwxYrrLA7FD48wKXZ7fxtWgLa7N79sgq/pub?gid=876019519&single=true&output=csv"


$outDir = $PSScriptRoot +  "/../src/data/"

New-Item -ItemType directory -Name $outDir -Force


# url と出力先のファイル名を定義します
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
