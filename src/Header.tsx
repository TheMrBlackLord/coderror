import React, { FC, useState } from 'react';
import _ from 'lodash';
import texts from './texts';

interface HeaderProps {
   className?: string
}

const defaultDuration = '8s';
const hoverDuration = '1s';

const Header: FC<HeaderProps> = ({ className }) => {
   const [name, setName] = useState<string>(_.sample(texts.NAMES) as string);
   const [prevName, setPrevName] = useState<string>('');
   const [duration, setDuration] = useState<string>(defaultDuration);

   const onMouseEnter = () => { 
      setPrevName(name);
      setDuration(hoverDuration);
      setName(() => texts.HOVER_NAME);
   };
   const onMouseLeave = () => {
      setDuration(defaultDuration);
      setName(() => prevName);
   };
   return (
      <pre
         className={className}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         style={{animationDuration: duration}}
      >
         {name}
      </pre>
   );
};

export default Header;
