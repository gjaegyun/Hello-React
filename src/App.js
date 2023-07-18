import {useState} from 'react';
import Board from "./Board";
import Button from './button';
import './App.css';

function random(n) {
    return Math.ceil(Math.random() * n); //다음에 올 숫자의 랜덤값
}

function App() {
    const [myHistory, setMyHistory] = useState([]); //setGameHistory를 usestate배열로 해놓는다.
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => { //던지기를 눌렀을때 실행할것을 만들어준다.
        const nextMyNum = random(6); //다음 나올 숫자를 1~ 6까지의 숫자로 랜덤화 시킨다.
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => { //처음부터를 눌렀을때 실행할것을 만들어준다.
        setMyHistory([]); //setGameHistory는 배열이기 때문에 배열의 초기화 방법인 ([])를 써준다.
        setOtherHistory([]);
    }

    return (
        <div className = "App">
            <Button className = "App-button" color="blue" onClick={handleRollClick}>
                던지기
            </Button>
            <Button className = "App-button" color="red" onClick={handleClearClick}>
                처음부터
            </Button>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory}/>
                <Board name="상대" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    );
}

export default App;