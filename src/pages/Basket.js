import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/basket.css';

import '../styles/custom.scss';

import Burger from '../assets/burger1.jpg';
import Trash from '../assets/trash2.png';
import Home from '../assets/home.png';
import Minus from '../assets/minus.png';
import Plus from '../assets/plus.png';


import { Container, Row, Col, Image } from 'react-bootstrap';
//Row = 12 cols or 100%

function Basket() {

    const basket = [
        { name: "Mega Burger 1", price: 175, description: "Lorem ipsum lorem ipsum ipsum", image: { Burger } },
        { name: "Mega Burger 2", price: 300, description: "Lorem ipsum lorem ipsum", image: { Trash } },
        { name: "Mega Burger 3", price: 450, description: "Lorem ipsum lorem ipsum ipsum ipsum", image: { Trash } },
    ];

    const addresses = [
        { il: "Antalya", ilce: "Kepez", adres: "pınarbaşı mah teknokent" },
        { il: "Antalya", ilce: "Muratpaşa", adres: "pınarbaşı mah teknokent" },

    ];


    return (
        <Container>
            <Row className='row-md-6'>
                <Col className='col-md-8' >
                    {basket.map((item, index) => (

                        <>
                            <Row key={index}>
                                <Image  /* className='w-0'  */ src={Burger} alt="burger" thumbnail style={{ width: '28%' }} fluid />
                                <Col className='col-md-4 mx-auto'>
                                    <div>
                                        <h3>{item.name} </h3>
                                        <hr color='#ff2400' size='30' />
                                        <p>{item.description}</p>
                                        <p>Price: ₺{item.price}</p>

                                        <br />
                                    </div>
                                </Col>

                                <Col className='col-md-2'>
                                    <Row>
                                        <Image src={Minus} alt="Trash" thumbnail style={{ width: '35%' }} />
                                        1
                                        <Image src={Plus} alt="Trash" thumbnail style={{ width: '35%' }} />
                                    </Row>
                                </Col>

                                <Col className='col-md-2 mx-auto align-items-center justify-content-center'>


                                    <Image /* className='w-0'  */ src={Trash} alt="Trash" thumbnail style={{ width: '35%' }} />
                                </Col>


                            </Row>
                            <hr />


                        </>

                    ))}

                    <Row className='row-md-6'>
                        <h2>Kayıtlı Adresler</h2>
                        {addresses.map((item, index) => (
                            <Col key={index} className=' mx-auto'>
                                <Container>
                                    {/* Seçilen adresin borderı danger kalanlarınki border-light */}
                                    <div className="card mb-3" >
                                        <div className="card" >
                                            <Image /* className='w-0'  */ src={Home} alt="Home" thumbnail style={{ width: '15%' }} />
                                        </div>
                                        <hr />
                                        <div className="card-body">
                                            <h5 className="card-title-a">{item.il}</h5>
                                            <p className="card-text">{item.ilce}</p>
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        ))}

                    </Row>
                    <hr />
                    <Row>
                        <Col className='col-md-4'>
                            <div className="card border-danger mb-3" >
                                <div className="card-mx-auto-odeme align-items-center justify-content-center" >
                                    <h5 className="card-title">Ödeme yöntemi seçiniz</h5>
                                </div>
                                <hr />
                                <div className="card-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Kapıda Nakit
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Kapıda Kredi Kartı
                                        </label>
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-8' >
                            <input placeholder='SİPARİŞ NOTU GİRİNİZ FORM' />
                        </Col>
                    </Row>

                </Col>


                <Col className='col-md-4' >
                  Siparis ozeti
                </Col>



            </Row>

            <br />

            {/* KAYITLI ADRESLER */}


        </Container>


    )
}

export default Basket



