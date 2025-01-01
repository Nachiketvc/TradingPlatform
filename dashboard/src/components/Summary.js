function Summary() {
    return (
        <div>
            <div className='right-left'>
                <h1>Hi, User!</h1>
            </div>
            <div className='border'></div>
            <div className='divide'><p>Equity</p></div>
            <div className='RightNavBar'>
                <div className='right-left'>
                    <h2>3.7K</h2>
                    <p style={{ text: 'muted' }}>Margin available</p>
                </div>
                <div className='right-right'>
                    <p style={{ marginRight: '400px' }}>Margin used</p>
                    <p style={{ marginRight: '400px' }}>Opening balance : 3.74k</p>
                </div>
            </div>
            <div className='RightNavBar'>
                <div className='right-left'>
                    <h2 style={{ paddingTop: '100px' }}>Holdings</h2>
                    <p style={{ text: 'muted' }}>1.55k<span>+5.20%</span></p>
                    <p>P & L</p>
                </div>
                <div className='right-right'>
                    <p style={{ marginRight: '400px', paddingTop: '100px' }}>Current Value: 31.43k</p>
                    <p style={{ marginRight: '400px' }}>Invested Value:  29k</p>
                </div>
            </div>

        </div>

    )
}

export default Summary;