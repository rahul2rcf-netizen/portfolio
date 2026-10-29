# Generates public/og.png (1200x630) and public/apple-touch-icon.png (180x180)
# ASCII-only strings + PowerShell-safe literals. Run:
#   powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/make-assets.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot

$paper = [System.Drawing.Color]::FromArgb(244, 241, 232)
$ink = [System.Drawing.Color]::FromArgb(19, 19, 17)
$muted = [System.Drawing.Color]::FromArgb(92, 89, 79)
$white = [System.Drawing.Color]::FromArgb(252, 250, 243)
$lime = [System.Drawing.Color]::FromArgb(201, 246, 59)

$pen = New-Object System.Drawing.Pen($ink, 10)
$solidInk = New-Object System.Drawing.SolidBrush($ink)
$solidPaper = New-Object System.Drawing.SolidBrush($paper)
$solidLime = New-Object System.Drawing.SolidBrush($lime)

# ----- OG image -----
$og = New-Object System.Drawing.Bitmap(1200, 630)
$g = [System.Drawing.Graphics]::FromImage($og)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
$g.Clear($paper)
$g.DrawRectangle($pen, 5, 5, 1190, 620)

$g.FillRectangle($solidLime, 60, 80, 92, 92)
$g.DrawRectangle($pen, 60, 80, 92, 92)

$fName = New-Object System.Drawing.Font('Arial', 104, [System.Drawing.FontStyle]::Bold)
$g.DrawString('M. RAHUL', $fName, $solidInk, 190, 88)

$fRoles = New-Object System.Drawing.Font('Consolas', 26, [System.Drawing.FontStyle]::Bold)
$g.DrawString('AI/ML GRADUATE  -  SOFTWARE DEVELOPER', $fRoles, $solidInk, 196, 240)

$fTag = New-Object System.Drawing.Font('Consolas', 21)
$g.DrawString('I build digital products with purpose.', $fTag, (New-Object System.Drawing.SolidBrush($muted)), 198, 306)

$g.FillRectangle($solidInk, 200, 402, 290, 44)
$g.FillRectangle($solidPaper, 200, 458, 290, 20)

$fFoot = New-Object System.Drawing.Font('Consolas', 19)
$g.DrawString('rahul2rcf-netizen.github.io/portfolio', $fFoot, $solidInk, 200, 528)
$g.DrawString('5 REPOS  |  2 DEMOS  |  BUILT IN PUBLIC', $fFoot, (New-Object System.Drawing.SolidBrush($muted)), 200, 564)

$g.Dispose()
$og.Save("$root/public/og.png", [System.Drawing.Imaging.ImageFormat]::Png)
$og.Dispose()
Write-Host 'og.png OK'

# ----- apple touch icon -----
$ic = New-Object System.Drawing.Bitmap(180, 180)
$g2 = [System.Drawing.Graphics]::FromImage($ic)
$g2.SmoothingMode = 'AntiAlias'
$g2.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
$g2.Clear($ink)
$g2.FillRectangle((New-Object System.Drawing.SolidBrush($lime)), 98, 98, 64, 64)
$fIcon = New-Object System.Drawing.Font('Arial', 82, [System.Drawing.FontStyle]::Bold)
$fmt = New-Object System.Drawing.StringFormat
$fmt.Alignment = [System.Drawing.StringAlignment]::Center
$rect = New-Object System.Drawing.RectangleF(0, 40, 132, 104)
$g2.DrawString('R', $fIcon, (New-Object System.Drawing.SolidBrush($white)), $rect, $fmt)
$ic.Save("$root/public/apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g2.Dispose(); $ic.Dispose()
Write-Host 'apple-touch-icon.png OK'
