import {useState} from 'react';
import Dice from './Dice';
import Button from './button';

function random(n) {
    return Math.ceil(Math.random() * n); //다음에 올 숫자의 랜덤값
}
function Board({name, color}) {
    const [num, setNum] = useState(1); //setNum의 초기 상태값을 1로 지정한다.
    const [sum, setSum] = useState(0); //setSum의 초기 상태값을 0으로 지정한다.
    const [gameHistory, setGameHistory] = useState([]); //setGameHistory를 usestate배열로 해놓는다.
    
    const handleRollClick = () => { //던지기를 눌렀을때 실행할것을 만들어준다.
        const nextNum = random(6); //다음 나올 숫자를 1~ 6까지의 숫자로 랜덤화 시킨다.
        setNum(nextNum); //처음기준 nextNum은 제일 처음의 숫자이기 때문에 넣는다.
        setSum(sum + nextNum); //sum에 저장된 처음 nextNum에다 다음에 계속 올 nextNum을 더한다.
        gameHistory.push(nextNum); //gameHistory가 배열형식 이기 때문에 다음에 올 숫자(nextNum)을 계속 push해준다.
        setGameHistory(...gameHistory, nextNum); //<- 솔직히 잘 모르겠다 ㅠㅠ
    };

    const handleClearClick = () => { //처음부터를 눌렀을때 실행할것을 만들어준다.
        setNum(1); //setNum에 표시되는, 즉 주사위 위에 표시되는 숫자들을 setNum(1)이니까 1로 초기화 시킨다.
        setSum(0); //setSum에 기록되어있는 것을 setSum(0)이니 0으로 초기화 시킨다.
        setGameHistory([]); //setGameHistory는 배열이기 때문에 배열의 초기화 방법인 ([])를 써준다.
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>{name}</h2>
                <Dice color ={color} num={num} /> 
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default Board;