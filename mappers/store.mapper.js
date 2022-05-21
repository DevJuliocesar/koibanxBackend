export function mapStoresDtoToModel(dto) {
    return {
      name: dto.name,
      categoryId: dto.category_id,
      category: dto.group,
      price: dto.price,
      priceOld: dto.price_old,
      id: dto.id,
      image: `https://ec-qbo.herokuapp.com/Stores/${dto.image}`,
    };
  }
  
  export function collectionStoresDtoToModels(dto) {
    return dto.map(item => mapStoresDtoToModel(item));
  }