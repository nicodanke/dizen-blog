import React from 'react';
import { motion } from "framer-motion";
import SocialButton from '../Social/SocialButton';
import Data from '../../Data';

const SocialButtons = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <SocialButton
                social="linkedin"
                icon="linkedin-in"
                link={`https://www.linkedin.com/company/${Data.social.linkedin}`}
            />
            <SocialButton
                social="instagram"
                icon="instagram"
                link={`https://www.instagram.com/${Data.social.instagram}`}
                margin={1}
            />
            <SocialButton
                social="tiktok"
                icon="tiktok"
                link={`https://www.tiktok.com/${Data.social.tiktok}`}
            />
        </motion.div>
    );
}

export default SocialButtons;
