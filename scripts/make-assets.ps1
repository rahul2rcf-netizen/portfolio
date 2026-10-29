# Generates public/og.png (1200x630) and public/apple-touch-icon.png (180x180)
# Sticker-mode V2: candy starburst + pills. ASCII-only literals. Run:
#   powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/make-assets.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot

$paper = [System.Drawing.Color]::FromArgb(244, 241, 232)
$ink = [System.Drawing.Color]::FromArgb(19, 19, 17)
$muted = [System.Drawing.Color]::FromArgb(92, 89, 79)
$white = [System.Drawing.Color]::FromArgb(252, 250, 243)
$lime = [System.Drawing.Color]::FromArgb(201, 246, 59)
$violet = [System.Drawing.Color]::FromArgb(139, 108, 255)
$pink = [System.Drawing.Color]::FromArgb(255, 111, 178)

$pen = New-Object System.Drawing.Pen($ink, 10)
$pen2 = New-Object System.Drawing.Pen($ink, 4)
$solidInk = New-Object System.Drawing.SolidBrush($ink)
$solidPaper = New-Object System.Drawing.SolidBrush($paper)
$solidLime = New-Object System.Drawing.SolidBrush($lime)
$solidViolet = New-Object System.Drawing.SolidBrush($violet)
$solidPink = New-Object System.Drawing.SolidBrush($pink)

# ----- OG image -----
$og = New-Object System.Drawing.Bitmap(1200, 630)
$g = [System.Drawing.Graphics]::FromImage($og)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
$g.Clear($paper)
$g.DrawRectangle($pen, 5, 5, 1190, 620)

# starburst sticker (right side)
$cx = 980; $cy = 210; $outer = 150; $inner = 108; $spikes = 12
$pts = New-Object System.Drawing.PointF[] (24)
for ($i = 0; $i -lt 24; $i++) {
  $r = if ($i % 2 -eq 0) { $outer } else { $inner }
  $a = $i * [Math]::PI / $spikes - [Math]::PI / 2
  $pts[$i] = New-Object System.Drawing.PointF (($cx + $r * [Math]::Cos($a)), ($cy + $r * [Math]::Sin($a)))
}
$g.FillPolygon($solidLime, $pts)
$g.DrawPolygon($pen2, $pts)
$fStar = New-Object System.Drawing.Font('Arial', 34, [System.Drawing.FontStyle]::Bold)
$fmtC2 = New-Object System.Drawing.StringFormat
$fmtC2.Alignment = [System.Drawing.StringAlignment]::Center
$fmtC2.LineAlignment = [System.Drawing.StringAlignment]::Center
$sStar = New-Object System.Drawing.SolidBrush($ink)
$g.DrawString('GRAD ' + [char]39 + '26', $fStar, $sStar, (New-Object System.Drawing.RectangleF (($cx - 86), ($cy - 46), 172, 92)), $fmtC2)

# name + roles
$fName = New-Object System.Drawing.Font('Arial', 96, [System.Drawing.FontStyle]::Bold)
$g.DrawString('M. RAHUL', $fName, $solidInk, 80, 90)

$fRoles = New-Object System.Drawing.Font('Consolas', 25, [System.Drawing.FontStyle]::Bold)
$g.DrawString('AI/ML GRADUATE  -  SOFTWARE DEVELOPER', $fRoles, $solidInk, 88, 220)

$fTag = New-Object System.Drawing.Font('Consolas', 20)
$g.DrawString('I build digital products with purpose.', $fTag, (New-Object System.Drawing.SolidBrush($muted)), 90, 282)

# sticker pills row
$fPill = New-Object System.Drawing.Font('Consolas', 15, [System.Drawing.FontStyle]::Bold)
$g.FillEllipse($solidPink, 90, 372, 56, 56)
$g.DrawEllipse($pen2, 90, 372, 56, 56)
$g.FillEllipse($solidViolet, 170, 372, 56, 56)
$g.DrawEllipse($pen2, 170, 372, 56, 56)
$g.FillEllipse($solidLime, 250, 372, 56, 56)
$g.DrawEllipse($pen2, 250, 372, 56, 56)
$g.DrawString('500+ CODECHEF   -   C2C INTERN', $fPill, $solidInk, 340, 378)
$fPill2 = New-Object System.Drawing.Font('Consolas', 15, [System.Drawing.FontStyle]::Bold)
$g.DrawString('GSSoC + HACKTOBERFEST   -   B.TECH CSE 7.92', $fPill2, $solidInk, 340, 424)

# footer
$fFoot = New-Object System.Drawing.Font('Consolas', 19)
$g.DrawString('rahul2rcf-netizen.github.io/portfolio', $fFoot, $solidInk, 90, 524)
$g.DrawString('05 REPOS  |  02 DEMOS  |  REAL RESUME ON THE SITE', $fFoot, (New-Object System.Drawing.SolidBrush($muted)), 90, 560)

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
