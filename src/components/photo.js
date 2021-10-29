import axios from "axios";
import { Component } from "react"
import FormRecherche from "./formRecherche";
import Navigation from "./navigation";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            photos: [],
            totalHits: 0,
            page: 1
        }
    }


    handelSearch = (index) => {
        axios.get(`https://pixabay.com/api/?key=16038116-1601cf38aef095472d2f0b59f&q=${this.state.search}&per_page=5&page=${index || 1}`).then((res) => this.setState({ photos: res.data.hits, totalHits: parseInt(res.data.totalHits / 5) }))
    }
    setMotCle = (e) => {
        this.setState({ search: e.target.value })
    }
    render() {
        return (
            <>
                <FormRecherche set={this.setMotCle} search={this.handelSearch}>
                    <Navigation totalHits={this.state.totalHits} setPage={this.setState} handelSearch={this.handelSearch} search={this.handelSearch} />
                    {this.state.photos.map((img, i) =>
                        <div style={{ padding: '2px' }} key={i}>
                            <h3>{`${img.tags} | ${img.webformatWidth}X${img.webformatHeight}`}</h3>
                            <img width="400px" src={img.webformatURL} alt={img.tags}></img><br />
                            <Router>
                                <Link to={`/details/${img.id}`} target="_blank">Hit details</Link>
                            </Router>
                        </div>
                    )}
                </FormRecherche>
            </>
        );
    }
}

export default Photos;