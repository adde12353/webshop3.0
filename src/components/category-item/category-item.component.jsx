import './category-item.styles.scss'

const CategoryItem = ({ category, key }) => {
    const { imageUrl, title } = category
    return ( 
        <div key={key} class="category-container">
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}/>
          
          <div className="category-body-container">
            <h2>{title}</h2>
             <p>Köp nu</p>
              </div> 
          </div>
        
     );
}
 
export default CategoryItem;