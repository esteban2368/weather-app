'use client';
import { useRootDispatchContext } from '@/providers/RootDispatchProvider'
import { useRootContext } from '@/providers/RootProvider'
import { motion, useAnimation, AnimationControls } from 'framer-motion'
import uuid4 from 'uuid4'
import { variantList, variantListItem, variantHoverIcon } from '@/constant/variantsMotion'
import { DEFAULT_LOCATION } from '@/constant/services'
import { locationUserType } from '@/types/components/CurrentWeather'


import style from '@/styles/components/ListItemsSearch.module.scss'

interface props {
  offVisible?: () => void
}
const ListItemsSearch = ({
  offVisible
}: props) => {
  const globalState = useRootContext()
  const searchedPlaces = globalState?.searchedLocations
  const dispatch = useRootDispatchContext()

  const handleHoverStart = async (iconControls: AnimationControls) => {
    await iconControls.start('hover');
  };

  const handleHoverEnd = async (iconControls: AnimationControls) => {
    await iconControls.start('initial');
  };
  const handleChangeLocation = (location: locationUserType  | null) => {
    dispatch &&
      dispatch({
        type: 'get_location_user',
        location: location,
        reducer: 'loc'
      })
    if (offVisible) offVisible()
  }
  return (
    <motion.ul 
      initial="closed"
      animate="open"
      variants={variantList}
      className={style.list}
    >
      {searchedPlaces && searchedPlaces?.map((city, index) => {
        const iconControls = useAnimation();

        return (
          <motion.li
            key={uuid4()}
            variants={variantListItem}
            onHoverStart={() => handleHoverStart(iconControls)}
            onHoverEnd={() => handleHoverEnd(iconControls)}
          >
            <button role='button' className="w-full bg-secundary color-lila d-flex items-c justify-sb" 
                    onClick={() => handleChangeLocation({lat: city.lat, lon: city.lon})}
            >
              {`${city.name}, ${city.country}`}
              <motion.span 
                className="material-symbols-outlined md-1 color-gray"
                initial="initial"
                animate={iconControls}
                variants={variantHoverIcon}
              >
                chevron_right
              </motion.span>
            </button>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default ListItemsSearch;
