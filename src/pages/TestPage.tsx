

const TestPage = () => {
    let a = [5, 2, 3]
    let sorted = a.sort()
    const b = [9, 1, 3]

    function sortfunc() {
        for (let i = 0; i < b.length; i++) {
            for (let j = 0; j < b.length - i; j++) {
                if (b[j] > b[j + 1]) {
                    [b[j], b[j + 1]] = [b[j + 1], b[j]]
                }
            }
        }
        console.log(b)
    }


    sortfunc()



    return (
        <div>
            bu
            {sorted}
        </div>
    )
}

export default TestPage