import "./PlayPage.css";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TyleContainer from "../../Containers/PlayPageContainers/TyleContainer/TyleContainer";

function generateExpression(targetNumber) {
    const operators = ['+', '-', '*'];
  
    // Funcție auxiliară pentru a verifica dacă expresia respectă condițiile
    function isValidExpression(expression) {
      // Împărțim expresia în elemente pentru a evalua rezultatele intermediare
      const elements = expression.split(/([+\-*])/);
  
      let partialResult = parseInt(elements[0], 10);
  
      for (let i = 1; i < elements.length; i += 2) {
        const operator = elements[i];
        const nextNumber = parseInt(elements[i + 1], 10);
  
        if (operator === '+') {
          partialResult += nextNumber;
        } else if (operator === '-') {
          partialResult -= nextNumber;
        } else if (operator === '*') {
          // Verificăm dacă numerele ce se înmulțesc sunt mai mici de 10
          if (partialResult > 10 || nextNumber > 10) {
            return false;
          }
          partialResult *= nextNumber;
        }
  
        // Verificăm dacă rezultatul parțial depășește 1000 pentru adunări și scăderi
        if (Math.abs(partialResult) > 1000) {
          return false;
        }
      }
  
      return partialResult === targetNumber;
    }
  
    // Funcție pentru a genera o expresie aleatoare
    function generateRandomExpression() {
      let expression = '';
      for (let i = 0; i < 6; i++) {
        expression += Math.floor(Math.random() * 9)+1; // Adăugăm cifre aleatoare
  
        if (i < 5) {
          expression += operators[Math.floor(Math.random() * operators.length)]; // Adăugăm un operator aleatoriu
        }
      }
      return expression;
    }
  
    // Generăm expresii până găsim una validă conform criteriilor
    let found = false;
    let expression = '';
  
    while (!found) {
      expression = generateRandomExpression();
      found = isValidExpression(expression);
    }
  
    return expression;
}
  
  // Exemplu de utilizare: generare pentru un număr dat

const generatePath = (matrixSize) => {
    const generatedExpression = generateExpression(80);
    console.log(generatedExpression);
    let matrix;
    let foundCorrect=true;
    do {
        foundCorrect=true;
        matrix=Array(matrixSize).fill('').map(() => new Array(matrixSize).fill(''));
        let currentPosition=[parseInt(matrixSize/2),parseInt(matrixSize/2)];
        let size=generatedExpression.toString().split('').length;
        let counter=0;
        generatedExpression.toString().split('').forEach(element => {
            let toAdd=element!="*" ? element : "x";
            console.log(toAdd);
            matrix[currentPosition[0]][currentPosition[1]]=toAdd;
            counter+=1;
            if(counter<size) {
                let possibleIndexes=Array(4).fill(0);
                if(currentPosition[0]-1>0 && matrix[currentPosition[0]-1][currentPosition[1]]==='')
                    possibleIndexes[0]=[currentPosition[0]-1,currentPosition[1]];
                if(currentPosition[0]+1<matrixSize && matrix[currentPosition[0]+1][currentPosition[1]]==='')
                    possibleIndexes[1]=[currentPosition[0]+1,currentPosition[1]];
                if(currentPosition[1]-1>0 && matrix[currentPosition[0]][currentPosition[1]-1]==='')
                    possibleIndexes[2]=[currentPosition[0],currentPosition[1]-1];
                if(currentPosition[1]+1<matrixSize && matrix[currentPosition[0]][currentPosition[1]+1]==='')
                    possibleIndexes[3]=[currentPosition[0],currentPosition[1]+1];
                if(!(possibleIndexes[0]==possibleIndexes[1] && possibleIndexes[1]==possibleIndexes[2] && possibleIndexes[2]==possibleIndexes[3] && possibleIndexes[1]==0)) {
                    while(true) {
                        let index=parseInt(Math.random()*4);
                        if(possibleIndexes[index]!==0){
                            currentPosition=possibleIndexes[index];
                            break;
                        }
                    }
                } else {
                    foundCorrect=false;
                }
            }
        });
    } while(!foundCorrect);
    const operators=["+","-","x"];
    for(let i=0;i<matrixSize;i++)
        for(let j=0;j<matrixSize;j++)
            if(matrix[i][j]=='') {
                if((i+j)%2==0) {
                    matrix[i][j]=parseInt(Math.random()*9+1);
                } else {
                    matrix[i][j]=operators[parseInt(Math.random()*3)];
                }
            }
    return matrix;
}

const PlayPage = () => {
    const location=useLocation();
    const difficulty = location.search[1];
    const [matrix,setMatrix] = useState(null);
    
    useEffect(() => {
        setMatrix(generatePath(parseInt(difficulty)));
    },[]);

    if(!matrix) {
        return (
            <div className="PlayPage">
                <PageHeader title="Mathematician Frog"/>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            <div className="PlayPage">
                <PageHeader title="Mathematician Frog"/>
                <TyleContainer matrix={matrix} difficulty={difficulty}/>
            </div>
        );
    }
}

export default PlayPage;