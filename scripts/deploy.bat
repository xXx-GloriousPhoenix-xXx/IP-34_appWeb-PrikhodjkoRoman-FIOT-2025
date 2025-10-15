@echo off
echo Starting deployment...

rmdir /s /q docs
mkdir docs
xcopy campout\build\* docs\ /E /H /C /I /Y
echo. > docs\.nojekyll

git add docs
git commit -m "Deploy to GitHub Pages"
git push

echo "Deploy completed!"