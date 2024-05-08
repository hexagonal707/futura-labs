import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPhoneDetail } from "../../api.js";
import { useDispatch } from "react-redux";
import { addCartInfo } from "../../Redux/phoneApiSlice.js";
import Navbar from "../../components/Navbar.jsx";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 8rem 3rem 0 3rem;
  height: auto;
  width: 100%;
  background-color: #171717;
  color: white;
`;

const BtnAddToCart = styled.button`
  border: 0.1rem solid #595959;
  background: #0c0c0c;
  color: #ffffff;
  width: max-content;
  backdrop-filter: blur(2rem);
  font-size: 1rem;
  font-weight: bold;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem 0 #30303044;

  &:hover {
    transition: 100ms ease-in-out;
    background: #ffc142;
    box-shadow: 0 0 0.6rem 0 #ffc14266;
    color: black;
    font-weight: bold;
  }
`;
const BtnInCart = styled.button`
  border: 0.1rem solid #595959;
  background: #ffc142;
  color: black;
  font-weight: bold;
  width: max-content;
  backdrop-filter: blur(2rem);
  font-size: 1rem;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem 0 #30303044;

  &:hover {
  }
`;

const PhoneLayoutContainer = styled.div`
  padding: 2rem min(10vw, 15rem);
  height: max-content;
  display: grid;
  grid-gap: 2rem;
  color: #e6e6e6;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 2fr;
  border-radius: 1rem 1rem 0 0;
  outline: 0.1rem solid #ffffff11;
  background-color: #04040488;
`;

const PlaceHolderContainer = styled.div`
  display: block;
  height: auto;
  align-content: center;
  width: min-content;
  position: relative;
`;

const PlaceHolderImage = styled.img`
  display: flex;
  height: auto;
  width: 10rem;
  position: relative;
`;

const PhoneDetailContainer = styled.div`
  display: flex;
  width: 100%;
`;
const PriceHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 700;
`;
const PhoneNameHeading = styled.div`
  text-align: left;
  padding-top: 2rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  padding: 1rem;
  width: 15rem;
  border-radius: 0.3rem;
  /*background: #1c1c1c;
    outline: 0.1rem solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 1rem 0 #ffffff22;*/
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PhoneDescriptionContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 2/2;
  height: fit-content;
  text-align: justify;
`;

const ItemDetail = () => {
  const itemId = useParams();
  console.log(itemId.id, "itemId");
  const dispatch = useDispatch();

  const [apiDataState, setApiDataState] = useState([]);

  useEffect(() => {
    fetchPhoneDetail(itemId.id).then((item) => {
      setApiDataState(item);
    });
  }, [itemId.id]);
  ``;

  async function addToCart() {
    apiDataState.quantity = apiDataState.quantity + 1;
    console.log("*************", apiDataState);
    dispatch(addCartInfo(apiDataState));
  }

  console.log(apiDataState && apiDataState.brand, "apiDataState");
  return apiDataState && apiDataState ? (
    <MainContainer>
      <Navbar />
      <PhoneLayoutContainer>
        <PlaceHolderContainer>
          <PlaceHolderImage src={apiDataState.img} alt="" />
        </PlaceHolderContainer>
        <PhoneDetailContainer>
          <div>
            <PhoneNameHeading>
              {`${apiDataState.brand} ${apiDataState.model}`}
            </PhoneNameHeading>
            <SpecsContainer>
              <Specs>
                <span>
                  <b>•&emsp;Display Size</b>
                </span>{" "}
                <span>{apiDataState.display_size_inches} inches</span>
              </Specs>

              <Specs>
                <span>
                  <b>•&emsp;RAM</b>
                </span>{" "}
                <span>{apiDataState.ram_gb} GB</span>
              </Specs>
              <Specs>
                <span>
                  <b>•&emsp;Storage</b>
                </span>{" "}
                <span>{apiDataState.storage_gb} GB</span>
              </Specs>
              <Specs>
                <span>
                  <b>•&emsp;Release Year</b>
                </span>{" "}
                <span>{apiDataState.release_year}</span>
              </Specs>
            </SpecsContainer>
          </div>
        </PhoneDetailContainer>
        <PriceHeading>
          <div>
            <div style={{ margin: "1rem 0" }}> {apiDataState.star_rating}</div>
            <div>${apiDataState.price_usd}&nbsp;</div>
          </div>
          <div>
            <BtnAddToCart onClick={() => addToCart()}>Add to Cart</BtnAddToCart>
          </div>
        </PriceHeading>
        <PhoneDescriptionContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae,
            enim, fugit hic maiores neque obcaecati quaerat sed tenetur ut
            velit, voluptate. A atque blanditiis cum deserunt dignissimos dolore
            eius et fugit incidunt ipsam iste itaque libero minima molestiae
            necessitatibus officia perferendis possimus quidem quis quo,
            recusandae rem sed tempore temporibus veniam vero vitae voluptatem,
            voluptates voluptatibus voluptatum? Alias corporis cum eius eligendi
            excepturi facere harum, ipsa itaque magni maiores neque officia,
            quae quaerat quisquam tempore. Beatae dolorum laboriosam magni modi
            molestias placeat rem repellat ullam voluptas voluptatum! Ad
            architecto, consectetur consequatur corporis cupiditate ea excepturi
            labore, laboriosam nulla odit possimus quidem repellat similique
            suscipit, veritatis? Accusantium, aspernatur autem consequuntur
            dicta dignissimos error expedita fugit harum, labore laudantium
            natus non nulla quae quisquam repellendus. Asperiores blanditiis
            commodi deleniti doloribus eligendi expedita ipsam perferendis porro
            praesentium quae, reprehenderit, temporibus. Ab architecto dolor
            nemo, neque omnis quisquam ullam voluptates! Adipisci animi eaque
            facere maiores nemo nobis pariatur quo! A ab aliquid deleniti
            deserunt dicta dolore error facere in ipsum itaque labore mollitia
            nam nostrum numquam placeat, quo rem repudiandae sequi. At cum,
            deserunt dolorem est eum explicabo incidunt iste minus mollitia
            nostrum omnis provident quasi repellendus soluta, sunt voluptates
            voluptatum. Accusamus amet architecto asperiores autem cumque
            doloremque, ducimus eius eligendi error eum explicabo fuga
            laboriosam laborum magni minus neque nostrum nulla optio,
            perferendis sed sint suscipit ut veniam. Ad adipisci consequuntur
            corporis dolor doloremque id illum, maxime provident, quod sint
            suscipit tempore. Ab adipisci, blanditiis consequuntur cupiditate
            delectus deleniti deserunt dolore ducimus earum eos error esse est
            iste libero maiores modi necessitatibus nemo, nihil obcaecati
            perferendis placeat praesentium quidem voluptas. Distinctio dolore
            dolorum iure laborum quos! A, ad asperiores at consectetur
            consequuntur debitis delectus ducimus ex facere facilis hic in iste
            laboriosam laudantium molestiae nesciunt officiis perferendis quia
            reiciendis saepe sapiente similique sint suscipit tempore voluptas.
            Ab ad assumenda consequatur corporis deleniti distinctio dolorem
            eaque illo illum iusto labore maiores natus nulla officiis pariatur
            quidem quisquam repellat rerum sit, voluptatem. A ab animi
            aspernatur cupiditate distinctio, dolorem dolores harum itaque iure
            iusto laboriosam magnam necessitatibus nulla possimus provident
            quasi quidem quisquam recusandae repellat, sint sunt suscipit
            tenetur unde. Distinctio eum ipsam pariatur! Accusamus alias amet
            asperiores aspernatur autem, consectetur consequatur culpa dolorum
            eligendi ex exercitationem explicabo facere inventore iure magnam
            minima molestiae necessitatibus non nostrum officia optio
            perferendis quam ratione sed sit! Alias commodi debitis dolorem
            dolorum eius esse facere ipsa, laudantium ratione sequi tenetur
            voluptatem. Accusantium dolorem excepturi fuga ipsam minima
            molestiae, praesentium provident quas quod sunt! Alias aliquam
            assumenda at blanditiis dolore dolorem, ea esse, impedit iste itaque
            labore laudantium minima mollitia nam nihil odit officia omnis
            pariatur placeat porro praesentium quae qui, reiciendis
            reprehenderit soluta vel vero voluptatem. Aut culpa cum deserunt ea
            eius eum eveniet fugit inventore itaque labore libero magnam magni
            maiores mollitia nemo nisi perferendis, perspiciatis porro qui
            quidem quisquam rem reprehenderit sed sequi soluta ullam vitae?
            Harum, quaerat sapiente. Amet asperiores aut doloremque ducimus
            error ex in ipsa laborum, quasi quia ratione sapiente unde vero.
          </p>
        </PhoneDescriptionContainer>
      </PhoneLayoutContainer>
    </MainContainer>
  ) : null;
};

export default ItemDetail;
