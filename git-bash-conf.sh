#!/bin/bash

# Variabili da personalizzare
STUDENT_NAME="Tommaso Cacciapaglia"
STUDENT_EMAIL="cacciapaglia.t@cerebotani.it"
STUDENT_FOLDER="C:\Users\studente\Desktop\5E"


# Configurazione di Git
git config --global user.name "$STUDENT_NAME"
git config --global user.email "$STUDENT_EMAIL"
git config --global core.editor "nano"
git config --global core.autocrlf false
git credential-cache exit

clear
echo "============================================"
echo " Benvenut* $STUDENT_NAME, buon coding!"
echo "============================================"

cd "$STUDENT_FOLDER"
exec bash --login -i