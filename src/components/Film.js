import React,{useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PaginateCom from "./PaginateCom"
import { useSelector,useDispatch } from 'react-redux'
import { GetAllMovie } from '../redux/actions/movieAction'

const Film = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(GetAllMovie())
    },[])
    const dataMovies = useSelector((state)=>state.moviesReducer.movies)
    // useEffect(() => {
    // setMovies(dataMovies)
    // }, [dataMovies])

return (
    <Row className='my-3'>
        {dataMovies.length >=1? (
            dataMovies.map((item)=>{
                return(
                    <Col key={item.id} sm={6} md={4} lg={3} className='img-par'>
                        <Link to={"/movies/"+item.id}>
                            <div className='cover text-center'>
                                <span>اسم الفيلم : {item.title}</span>
                                <span>تاريخ الاصدار : {item.release_date}</span>
                                <span>عدد المقيمين : {item.vote_count}</span>
                                <span>التقييم : {item.vote_average}</span>
                            </div>
                        </Link>
                        <img className='img-size' src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt='film' />
                    </Col>
                )
            })
        ) : <h2 className='text-center'>لا يوجد افلام</h2>}
        {dataMovies.length >= 1 ? (<PaginateCom/>) : null}
    </Row>
)
}

export default Film