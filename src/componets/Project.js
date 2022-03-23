import alTogether from '../img/AlTogether.JPG'
import picOfMe from '../img/Me.JPG'
import runBuddy from '../img/Run-Buddy.JPG'
import syntax from '../img/Syntax.JPG'








function Project() {
    return (
        <section className='p-5 bg-primary'>
            <div className="row p-4">
                {/* <div className='col-4'> */}
                    <div className='card'>
                        <a href='https://github.com/35jakesmith/AL-together'>
                            <img src={alTogether} className="card-img-top" alt=""></img>
                        </a>
                        <div className='card-body'>
                            <h5 className='card-title'>Al-Together</h5>
                            <p className='card-text'>Javascript, HTML, CSS</p>
                            <a href='https://github.com/35jakesmith/AL-together' className='btn btn-secondary'> Github Repo</a>
                        </div>
                    </div>
                {/* </div> */}
            </div>

            <div className="row p-4">
                {/* <div className='col-4'> */}
                    <div className='card'>
                        <a href='https://35jakesmith.github.io/run-buddy/'>
                            <img src={runBuddy} className="card-img-top" alt=""></img>
                        </a>
                        <div className='card-body'>
                            <h5 className='card-title'>Run Buddy</h5>
                            <p className='card-text'>html, css</p>
                            <a href='https://github.com/35jakesmith/run-buddy' className='btn btn-secondary'>Github Repo</a>
                        </div>
                    </div>
                {/* </div> */}
            </div>


            <div className='row p-4'>
                <div className='card'>
                    <a href='https://syntax-uofu.herokuapp.com/'>
                        <img src={syntax} className="card-img-top" alt=""></img>
                    </a>
                    <div className='card-body'>
                        <h5 className='card-title'>Syntax</h5>
                        <p className='card-text'>MERN Stack</p>
                        <a href='https://github.com/35jakesmith/Syntax' className='btn btn-secondary'>Github Repo</a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Project;