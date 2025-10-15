@echo off
cd campout
npm run build
cd ..
rmdir /s docs
mkdir docs
xcopy campout\build\* docs\ /E /H /C /I
echo. > docs\.nojekyll
git add docs
git commit -m "Deploy to GitHub Pages"
git push
echo "Deploy completed!"