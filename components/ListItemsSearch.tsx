'use client';
import Link from 'next/link';
import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { variantList, variantListItem, variantHoverIcon } from '@/constant/variantsMotion';
import style from '@/styles/components/ListItemsSearch.module.scss';

const ListItemsSearch = () => {

  const handleHoverStart = async (iconControls: AnimationControls) => {
    await iconControls.start('hover');
  };

  const handleHoverEnd = async (iconControls: AnimationControls) => {
    await iconControls.start('initial');
  };

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
            <Link href="/" className="color-lila d-flex items-c justify-sb">
              {city}
              <motion.span 
                className="material-symbols-outlined md-1 color-gray"
                initial="initial"
                animate={iconControls}
                variants={variantHoverIcon}
              >
                chevron_right
              </motion.span>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default ListItemsSearch;
