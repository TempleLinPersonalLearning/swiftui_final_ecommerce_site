import './App.css'
import {StoreItemCard} from "./StoreItemCard.jsx";
import img0 from './assets/hunchback_tool_imgs/img.png'
import img1 from './assets/hunchback_tool_imgs/img_1.png'
import img2 from './assets/hunchback_tool_imgs/img_2.png'
import img3 from './assets/hunchback_tool_imgs/img_3.png'
import img4 from './assets/hunchback_tool_imgs/img_4.png'
import img5 from './assets/hunchback_tool_imgs/img_5.png'
import img6 from './assets/hunchback_tool_imgs/img_6.png'
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
      <>
          <h1 style={{textAlign: "center", color: "white"}}>駝背產品商城</h1>
          <Container>
              <Row>
                  <Col><StoreItemCard img={img0} title={"上肢牽引器"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img1} title={"上肢牽引器2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img2} title={"駝背矯正帶1"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img3} title={"駝背矯正帶2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img6} title={"駝背矯正帶3"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img5} title={"開肩矯正身姿"} text={"可以架設幫助改善駝背用之商品"}/></Col>
              </Row>
              <Row>
                  <Col><StoreItemCard img={img3} title={"駝背矯正帶2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img6} title={"駝背矯正帶3"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img5} title={"開肩矯正身姿"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img0} title={"上肢牽引器"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img1} title={"上肢牽引器2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img2} title={"駝背矯正帶1"} text={"可以架設幫助改善駝背用之商品"}/></Col>
              </Row>
              <Row>
                  <Col><StoreItemCard img={img6} title={"駝背矯正帶2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img5} title={"駝背矯正帶3"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img4} title={"開肩矯正身姿"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img3} title={"駝背矯正帶2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img2} title={"駝背矯正帶3"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img1} title={"開肩矯正身姿"} text={"可以架設幫助改善駝背用之商品"}/></Col>
              </Row>
              <Row>
                  <Col><StoreItemCard img={img3} title={"駝背矯正帶2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img2} title={"駝背矯正帶3"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img1} title={"開肩矯正身姿"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img0} title={"上肢牽引器"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img1} title={"上肢牽引器2"} text={"可以架設幫助改善駝背用之商品"}/></Col>
                  <Col><StoreItemCard img={img2} title={"駝背矯正帶1"} text={"可以架設幫助改善駝背用之商品"}/></Col>
              </Row>
          </Container>
      </>
  )
}

export default App
