import ListItemsSearch from '@/components/ListItemsSearch'
import FormSearchPlaces from '@/ui/FormSearchPlaces'

import style from '@/styles/search-places/page.module.scss'

const SearchPlacesPage = () => {
    return (
        <div className="bg-secundary d-flex flex-col gap-6">
            <FormSearchPlaces/>
            <ListItemsSearch/>
        </div>
    )
}

export default SearchPlacesPage