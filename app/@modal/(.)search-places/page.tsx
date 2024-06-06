import Modal from "@/components/Modal"
import ListItemsSearch from "@/components/ListItemsSearch"

import style from "@/styles/search-places/page.module.scss"

const SearchPlacesPageModal = () => {
    return (
        <Modal>
            <div className="bg-secundary d-flex flex-col gap-6">
            <form className="row">
                <div className="column-9">
                    <div className={`${style.inputSearch} h-full padding-4 d-flex items-c gap-2`}>
                        <span className="material-symbols-outlined md-2 ">
                            search
                        </span>
                        <input 
                            type='text' 
                            className={`w-full h-full bg-secundary`}
                            placeholder="search location"
                        />
                    </div>
                </div>
                <div className="column-3 d-flex justify-e">
                    <button type="submit" className="button button-purple h-full">
                        Search
                    </button>
                </div>
            </form>
            <ListItemsSearch/>
        </div>
        </Modal>
    )
}
export default SearchPlacesPageModal