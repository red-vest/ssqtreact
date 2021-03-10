import React, {useMemo} from "react";


function Memo(props: any) {
    console.log('渲染了memo组件')

    function fibonacci(n: number): number {
        if (n === 0) return 0
        else if (n === 1) return 1
        else return fibonacci(n - 1) + fibonacci(n - 2)
    }

    const data = useMemo(() => {
        return fibonacci(props.n)
    }, [props.n])

    return (
        <div>
            <p>{data}</p>
            <button onClick={() => props.bindClick()}>计算</button>
        </div>
    )
};

export default Memo
