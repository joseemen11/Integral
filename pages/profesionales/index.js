import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Attorney from '../../components/attorneys';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'

const AttorneyPage =() => {
    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Profesionales'} pagesub={'Profesionales'}/> 
            <Attorney/>
            <Newsletter />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AttorneyPage;
