import logoImg from "../assets/quiz-logo.png";

const Header = () => {
    return (
        <header>
            <img src={logoImg} alt="Quiz logo" />
            <h1>ReactQuiz</h1>
        </header>
    );
};

export default Header;
