import "./PlayPage.css";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import TyleContainer from "../../Containers/PlayPageContainers/TyleContainer/TyleContainer";
import Score from "../../Containers/PlayPageContainers/Score/Score";
import Modal from "../../Containers/PlayPageContainers/Modal/Modal";
import Instructions from "../../Containers/PlayPageContainers/Instructions/Instructions";
import Target from "../../Containers/PlayPageContainers/Target/Target";
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

const generatePath = (matrixSize,target) => {

    const generatedExpression = generateExpression(target);
    let matrix;
    let foundCorrect=true;
    do {
        let randomVariable = parseInt(Math.random());
        let randomVariable2 = parseInt(Math.random());
    
        if (randomVariable==0) randomVariable=-1;
    
        foundCorrect=true;
        matrix=Array(matrixSize).fill('').map(() => new Array(matrixSize).fill(''));
        let currentPosition=[parseInt(matrixSize/2)+randomVariable,parseInt(matrixSize/2)+randomVariable2];
        if(randomVariable2==0) {
            currentPosition=[parseInt(matrixSize/2)+randomVariable,parseInt(matrixSize/2)];
        }
        else {
            currentPosition=[parseInt(matrixSize/2),parseInt(matrixSize/2)+randomVariable];
        }
        matrix[parseInt(matrixSize/2)][parseInt(matrixSize/2)]=null;
        let size=generatedExpression.toString().split('').length;
        let counter=0;
        generatedExpression.toString().split('').forEach(element => {
            let toAdd=element!="*" ? element : "x";
            if(toAdd!="x" && toAdd!="+" && toAdd!="-") {
                toAdd=parseInt(toAdd);
            }
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
                if((i+j)%2!==0) {
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
    const [target,setTarget] = useState(parseInt(Math.random()*100+1));
    const [score,setScore] = useState(0);
    const [string,setString] = useState('');
    const [sum,setSum] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const ref = useRef();

    const reset = () => ref.current.reset();

    const handleConfirmAction = (name) => {
        let leaderboard=localStorage.getItem('leaderboard');
        let OldData=[];
        if(leaderboard!=='[object Object]' && leaderboard!==null) {
            OldData=JSON.parse(leaderboard);
        }
        const newItem= {
            name:name,
            score:score
        }
        OldData.push(newItem);
        localStorage.setItem('leaderboard',JSON.stringify(OldData));
        retry();
    }
    const retry = () => {
        setSum(0);
        setString('');
        setScore(score => 0);
        let newTarget=0;
        do {
            newTarget=parseInt(Math.random()*difficulty*10+11);
        }while(newTarget===target);
        setTarget(target => newTarget);
        reset();
        setMatrix(null);
    }

    const reload = () => {
        setSum(0);
        setString('');
        const newScore = parseInt(score-parseInt(5*parseInt(parseInt(difficulty)/2-1)/3));
        if (newScore>0) {
            setScore(score => newScore);
        }
        else setScore(0);
        reset();
    }
    const updateScore = (step) => {
        let newScore=sum;
        if(typeof step === 'number')
            if(string==''){
                newScore+=step;
                setSum(newScore);
            }
            else {
                const lastSign=string.split("")[string.split("").length-1];
                if(lastSign=="x") {newScore=sum*step;setSum(newScore);}
                else if(lastSign=="+") {newScore=sum+step;setSum(newScore);}
                else if(lastSign=="-") {newScore=sum-step;setSum(newScore);}
            }
        if(step == "x" && (string.charAt(string.length - 2)=="+" || string.charAt(string.length - 2)=="-")) {
            setString(string => `(${string})${step.toString()}`);
        } else {
            setString(string => string+step.toString());
        }
        if (newScore==target) {
            setSum(0);
            setString('');
            setScore(score => score+5*parseInt(parseInt(difficulty)/2-1));
            const newTarget=parseInt(Math.random()*100+1);
            setTarget(target => newTarget);
            reset();
            setMatrix(null);
        }
    }
    useEffect(() => {
        setMatrix(generatePath(parseInt(difficulty),target));
    },[target]);

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
                <PageHeader title="Broscuta matematiciana"/>
                <TyleContainer ref={ref} updateScore={updateScore} matrix={matrix} difficulty={difficulty}/>
                <Target target={target} currentSum={sum}/>
                <Score save={setShowModal} reload={reload} retry={retry} currentString={string} currentScore={score}/>
                <Instructions/>
                <Modal
                    isOpen={showModal}
                    onClose={setShowModal}
                    onConfirm={handleConfirmAction}
                />
            </div>
        );
    }
}

export default PlayPage;