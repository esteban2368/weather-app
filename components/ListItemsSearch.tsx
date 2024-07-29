'use client';
import { useRootDispatchContext } from '@/providers/RootDispatchProvider'
import { motion, useAnimation, AnimationControls } from 'framer-motion';
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
      {['London', 'Barcelona', 'Bogotá'].map((city, index) => {
        const iconControls = useAnimation();

        return (
          <motion.li
            key={index}
            variants={variantListItem}
            onHoverStart={() => handleHoverStart(iconControls)}
            onHoverEnd={() => handleHoverEnd(iconControls)}
          >
            <button role='button' className="w-full bg-secundary color-lila d-flex items-c justify-sb" 
                    onClick={() => handleChangeLocation(DEFAULT_LOCATION)}
            >
              {city}
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
