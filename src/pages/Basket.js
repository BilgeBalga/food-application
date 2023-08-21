import { useState } from 'react'
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
        { il: "Antalya", ilce: "Muratpaşa", adres: "pınarbaşı mah teknokent" },

    ];

    const [productQuantities, setProductQuantities] = useState(
        basket.map(() => 1)
    );

    const handleIncrease = (index) => {
        const updatedQuantities = [...productQuantities];
        updatedQuantities[index] += 1;
        setProductQuantities(updatedQuantities);
    };

    const handleDecrease = (index) => {
        const updatedQuantities = [...productQuantities];
        if (updatedQuantities[index] > 1) { //1'den az olamaz!
            updatedQuantities[index] -= 1;
            setProductQuantities(updatedQuantities);
        }
    };


    return (
        <Container>
            <Row className='row-md-6'>
                <Col className='col-md-8' style={{ overflowY: 'auto', maxHeight: '900px' }} >
                    {basket.map((item, index) => (
                        <>
                            <Row key={index}  >
                                <Image src={Burger} alt="burger" thumbnail style={{ width: '28%' }} fluid />
                                <Col className='col-md-4 mx-auto' >
                                    <div >
                                        <h3>{item.name} </h3>
                                        <hr />
                                        <p>{item.description}</p>
                                        <p>Price: ₺{item.price}</p>

                                        <br />
                                    </div>
                                </Col>

                                <Col className='col-md-2'>
                                    <Row>
                                        <Image src={Minus} alt="Trash" thumbnail style={{ width: '35%' }} onClick={() => handleDecrease(index)} />
                                        {productQuantities[index]}
                                        <Image src={Plus} alt="Trash" thumbnail style={{ width: '35%' }} onClick={() => handleIncrease(index)} />
                                    </Row>
                                </Col>

                                <Col className='col-md-2'>
                                    <Image src={Trash} alt="Trash" thumbnail style={{ width: '35%' }} />
                                </Col>


                            </Row>
                            {/*  <hr /> */}


                        </>

                    ))}

                    <Row className='row-md-6'>
                        <hr />
                        <h2>Kayıtlı Adresler</h2>
                        <hr className='adres-hr' />
                        {addresses.map((item, index) => (
                            <Col key={index}>
                                <Container>
                                    {/* Seçilen adresin borderı danger kalanlarınki border-light */}
                                    <div className="card mb-3-address" >
                                        <div className="card-address-card" >
                                            <Image src={Home} alt="Home" thumbnail />
                                        </div>

                                        <hr />

                                        <div className="card-body">
                                            <p className="card-text">{item.adres}</p>
                                            <p className="card-text">{item.ilce} / {item.il} </p>
                                            <button seç />
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        ))}
                        {/* 
                            ADRES EKLE
                        */}

                    </Row>
                    <hr />
                    <Row>
                        <Col className='col-md-4'>
                            <div className="card border mb-3" >
                                <div className="card-odeme-card" >
                                    <h5 className="card-title">Ödeme yöntemi</h5>

                                </div>
                                <hr />
                                <div className="card-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Kapıda Nakit
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Kapıda Kredi Kartı
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-8-input-col' >
                            <input placeholder='SİPARİŞ NOTU GİRİNİZ FORM' id='input-col'
                            />
                        </Col>
                    </Row>

                </Col>


                <Col className='col-md-4-ozet-col'>

                    <div class="container-md-siparis">
                        Sipariş Özeti
                        <hr />
                            <Row>
                            SEÇİLEN ADRESİ GÖSTER
                               {/*  <Col> 
                               <button type="button" class="btn btn-warning">Alışverişe Dön</button>
                               <button type="button" class="btn btn-warning">Sepeti Onayla</button>
                               </Col> */}
                            </Row>
                   

                    </div>

                </Col>



            </Row>

            <br />

            {/* KAYITLI ADRESLER */}


        </Container>


    )
}

export default Basket



