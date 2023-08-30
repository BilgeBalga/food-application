import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/basket.css';
import '../styles/custom.scss';

import { Container, Row, Col, Image, Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
/* import { increment, decrement } from '../redux/cartSlice'*/

//Images
import Burger from '../assets/burger1.jpg';
import Trash from '../assets/trash2.png';
import Home from '../assets/home.png';
import Minus from '../assets/minus2.png';
import Plus2 from '../assets/plus2.png';
//import Plus from '../assets/plus.png';



function Basket() {

    const dispatch = useDispatch();
    /*   const products = useSelector((state) => state.cartSlice.products); */

    const basket = [
        { id: '1', name: "Mega Burger 1", price: 175, description: "Lorem ipsum lorem ipsum ipsum", image: { Burger } },
        { id: '2', name: "Mega Burger 2", price: 300, description: "Lorem ipsum lorem ipsum", image: { Trash } },
        { id: '3', name: "Mega Burger 3", price: 450, description: "Lorem ipsum lorem ipsum ipsum ipsum", image: { Trash } },
    ];

    const addresses = [
        /*         { il: "Antalya", ilce: "Kepez", adres: "pınarbaşı mah teknokent" },
                { il: "Antalya", ilce: "Muratpaşa", adres: "Lorem ipsum lorem ipsum ipsum ipsum" },
                  { il: "Antalya", ilce: "Muratpaşa", adres: "pınarbaşı mah teknokent" },   */
    ];


    // MODAL
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Process the form data here
        handleCloseModal();
    };



    // Varsayılan olarak bir adres seçilmedi.
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1);


    return (
        <Container classname='container'>
            <Row md={6} xs={6} sm={6} className=''>

                <Col md={8} xs={12} sm={4} className='basket-col' >
                    {basket.map((item, index) => (
                        <>
                            <Row key={index}  >
                                <Image src={Burger} alt="burger" thumbnail style={{ width: '28%' }} fluid />
                                <Col className='col-md-4 mx-auto' >
                                    <div >
                                        <h3> <b>{item.name} </b> </h3>
                                        <hr />
                                        <p>{item.description}</p>
                                        <p>Price: ₺{item.price}</p>

                                        <br />
                                    </div>
                                </Col>

                                <Col md={2} xs={3} sm={4} className='inc-dec-img'>
                                    <Row className='' >
                                        <Image /* className='minus-img' */ src={Minus} alt="Minus" thumbnail
                                            style={{ width: '35%', marginTop: '%5', alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: 'auto' }}
                                        /* onClick={() => dispatch(decrement({id: products.id}))} */ />

                                        {/*   {products.amount} */}

                                        <Image /* className='plus-img' */ src={Plus2} alt="Plus" thumbnail
                                            style={{ width: '35%', marginTop: '%5', alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: 'auto' }}
                                        /* onClick={() => dispatch(increment({id: products.id}))}  */ />

                                    </Row>
                                </Col>

                                <Col md={2} xs={3} sm={4} className='trash-img'>
                                    <Image /* className='trash-img' */ src={Trash} alt="Trash" thumbnail /* style={{ width: '35%',marginTop: '%5' }} */ /* onClick={() => (console.log('delete'))} */ />
                                </Col>
                            </Row>
                        </>
                    ))}
                    <Row md={12} className=''>
                        <hr />
                        <h2>Kayıtlı Adresler</h2>
                        <hr className='adres-hr' />
                        {addresses.length == 0 ? ( //Adres boş ise
                            <Col>
                                <Container>
                                    <Col >
                                        <div className="card mb-3-address">
                                            <div className="card-zero-address" onClick={handleShowModal}>
                                                <Image src={Plus2} alt="Plus" thumbnail />
                                                <p >Adres Ekle</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </Col>
                        ) : (
                            addresses.map((item, index) => (
                                <Col key={index}>
                                    <Container>
                                        { /* Seçilen adresin borderı danger kalanlarınki border-light */}
                                        <div
                                            className={`card mb-3-address ${selectedAddressIndex === index ? 'selected' : ''} `}
                                            onClick={() => setSelectedAddressIndex(index)}>
                                            <div className="card">
                                                <Image className="card-address-card" src={Home} alt="Home" thumbnail />
                                            </div>
                                            <hr />
                                            <div className="card-body">
                                                <p className="card-text">{item.adres}</p>
                                                <p className="card-text">{item.ilce} / {item.il} </p>
                                            </div>
                                        </div>
                                    </Container>
                                </Col>

                            ))
                        )}

                        {/*   {
                            addresses.length === 0 ? '' :
                                <Col>
                                    <Container>
                                        <Col>
                                            <div className="card mb-3-address">
                                                <div className="card-address-card" onClick={handleShowModal} >
                                                    <Image src={Plus2} alt="Plus" thumbnail />
                                                    <p >Adres Ekle</p>

                                                </div>
                                            </div>
                                        </Col>
                                    </Container>
                                </Col>
                        } */}
                    </Row>
                    {/* Modal */}
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton style={{ backgroundColor: 'red', color: 'white' }}>
                            <Modal.Title>Adres Ekle</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group controlId="addressTitle" >
                                    <Form.Label>Adres Başlığı</Form.Label>
                                    <Form.Control className='address-input' type="text" placeholder="Adres Başlığı" />
                                </Form.Group>
                                <Form.Group controlId="address" style={{ paddingTop: '5px', marginTop: '5px' }} >
                                    <Form.Label>Adres</Form.Label>
                                    <Form.Control className='address-input' type="text" placeholder="Adres" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="city" style={{ paddingTop: '5px', marginTop: '5px' }}>
                                            <Form.Label>İl</Form.Label>
                                            <Form.Control className='address-input' type="text" placeholder="İl" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="district" style={{ paddingTop: '5px', marginTop: '5px' }}>
                                            <Form.Label>İlçe</Form.Label>
                                            <Form.Control className='address-input' type="text" placeholder="İlçe" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="danger" type="submit" style={{ paddingTop: '5px', marginTop: '5px' }}>
                                    Adresi Kaydet
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <hr />
                    <Row>
                        <Col className='col-md-4'>
                            <div className="card border mb-3" >
                                <div className="card-odeme-card" >
                                    <h5 className="card-title">Ödeme yöntemi</h5>
                                </div>
                                <hr />
                                <div className="card-body-odeme">
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
                            <input placeholder='Sipariş Notu Ekleyin..' id='input-col'
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={4} xs={12} className='siparis-col' >
                    <div class="container-md-siparis" >
                        <h5> <b> Sipariş Özeti</b></h5>
                        <hr className='siparis-ozeti-hr' />
                        <Row>
                            <Col>
                                <h5> <b> Seçilen Adres </b></h5>
                                {selectedAddressIndex !== -1 ? ( //Seçilen adres varsa
                                    <div className="selected-address">
                                        <p>{addresses[selectedAddressIndex].adres}</p>
                                        <p>{addresses[selectedAddressIndex].ilce} / {addresses[selectedAddressIndex].il}</p>
                                        <p></p>
                                    </div>
                                ) : (
                                    <div>
                                    <p>Bir adres seçilmedi.</p>
                                    </div>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5><b> Toplam Tutar</b></h5>
                                {/* <p>₺{totalPrice}</p> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button type="button" className="btn btn-warning" >Alışverişe Dön </button>
                                <button type="button" className="btn btn-warning" style={{ marginLeft: '6px' }}>Sepeti Onayla </button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <br />
        </Container>


    )
}

export default Basket




