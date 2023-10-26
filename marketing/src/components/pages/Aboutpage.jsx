import './Aboutpage.css'

const Aboutpage = () => {

    return (
        <div className="everything">
            <div className="head-title">
                <header>
                    <div className="overlay">
                        <h1>Lorem Ipsum</h1>
                        <h3>The team working on this website</h3>
                        <p>NORF is an Ecommerce website, with the sole purpose to provide information about products</p>
                    </div>
                </header>
            </div>
            <div className="desc-text">
                <div className="container">
                    <p>
                        ! NORF is a website built for the final project of the Course Scripting Languages - Year 2022
                    </p>
                    <hr/>
                    <p>
                        Topic Chosen for this project is "Marketing website (Information based)".
                    </p>
                    <hr/>
                </div>

            </div>
            <div className="wrap">
                <h2>Contributors</h2>
                <p><a className="underlined underlined--thin">Romani Todua, Mikheil Bliadze, Giorgi Pruidze
                    ,Konstantine Vashalomidze, Lana Mamrikishvili</a></p>

                <h2>Project was created for Kutaisi International University</h2>
                <p><a className="underlined underlined--thick">
                    Professor : Ia Mosashvili, Course - Scripting Languages
                </a></p>

                <h2>Special Thanks to</h2>
                <p><a className="underlined underlined--offset">Course Assitents -
                    Salome Pirsomanishvili, Mirian Giorgadze</a></p>
            </div>
        </div>

    )
}
export default Aboutpage