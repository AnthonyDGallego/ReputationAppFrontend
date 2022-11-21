import React from "react";
import CompanyMainCard from "../../components/CompanyMainCard.jsx";

const Home = () => {
    return (
        <div className='flex flex-row flex-wrap justify-around mx-10 sm:py-4'>

            <CompanyMainCard
                photoUrl='https://oneminuteenglish.org/wp-content/uploads/2021/09/Get-the-Gist-72.png'
                title='Test company'
                score='5.0'
                id = '1'
            />


        </div>
    );
};

export default Home;