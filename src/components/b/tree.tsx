import React, { useEffect, useState } from 'react';
import classes from './tree.module.css';

const TreeComponent = ({ tree }) => {
  const [openedItems, setOpenedItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setOpenedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChecked = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    console.log(checkedItems)
  };

  useEffect(()=>{
    console.log('props',tree)
  },[])

  useEffect(()=>{
    console.log(openedItems)
  },[openedItems])

  return (
    <ul className={classes.tree}>
      {tree.map((item) => (
        <li className={classes.tree_item} key={item.id}>
          <div className={classes.tree_title}
            style={{ marginLeft: `${item.rank * 20}px` }}
          >
            <div
              className={`${classes.folder} ${openedItems[item.id] ? 'open' : ''}`}
              onClick={() => toggleItem(item.id)}
              style={{visibility:`${item.children?'visible':'hidden'}`}}
            >
              {openedItems[item.id] ? '-' : '+'}
            </div>                


            <div
              className={`${classes.checkbox} ${checkedItems[item.id] ? 'checked' : ''}`}
              onClick={() => toggleChecked(item.id)}
            >
            {checkedItems[item.id] && <span>&#10003;</span>}
            </div>
            <div className={classes.item}>{item.name}</div>
          </div>
          {openedItems[item.id] && item.children?.length > 0 && (
            // <ul className={classes.tree}>
            //   {item.children.map((childItem) => (
            //     <TreeComponent key={childItem.id} tree={[childItem]} />
            //   ))}
            // </ul>
              <TreeComponent tree={item.children} key={item.children.id} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TreeComponent;