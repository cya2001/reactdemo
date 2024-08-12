import React, {  useEffect } from 'react'
import { useSectionInView } from '../../lib/hooks.ts'
import Tree from './tree.tsx';

export default function B() {
  const {ref} = useSectionInView('b');  


  //   改成
  // children: (2) [{…}, {…}]
  // id: 1
  // name: "一级菜单A"
  // pid: -1
  // rank: 1 
  let data = [ 
    {id:1,pid:-1,name:"一级菜单A",rank:1}, 
    {id:2,pid:-1,name:"一级菜单B",rank:1}, 
    {id:3,pid:-1,name:"一级菜单C",rank:1}, 
    {id:4,pid:1,name:"二级菜单A-A",rank:2}, 
    {id:5,pid:1,name:"二级菜单A-B",rank:2}, 
    {id:6,pid:2,name:"二级菜单B-A",rank:2}, 
    {id:7,pid:4,name:"三级菜单A-A-A",rank:3}, 
    {id:8,pid:7,name:"四级菜单A-A-A-A",rank:4}, 
    {id:9,pid:8,name:"五级菜单A-A-A-A-A",rank:5}, 
    {id:10,pid:9,name:"六级菜单A-A-A-A-A-A",rank:6}, 
    {id:11,pid:10,name:"七级菜单A-A-A-A-A-A-A",rank:7}, 
    {id:12,pid:11,name:"八级菜单A-A-A-A-A-A-A-A",rank:8}, 
    {id:13,pid:12,name:"九级菜单A-A-A-A-A-A-A-A-A",rank:9}, 
    {id:14,pid:13,name:"十级菜单A-A-A-A-A-A-A-A-A-A",rank:10}, 
  ];

  let tree = [];
  let iddict = new Map();

  // Iteration and Recursion
  const trans = (data)=>{
    for(let item of data){
      const node = {
        id: item.id,
        pid: item.pid,
        name: item.name,
        rank: item.rank,
        checked:true,
        opened:true,
      };
      const parent = iddict.get(node.pid);
      if(!parent){
        tree.push(node);
      }else{
        parent.children = parent.children || [];
        parent.children.push(node);
      }
      iddict.set(node.id,node);
    }
  };

  // const resursion = (data,pid)=>{
  //   let tree = [];
  //   let curpid = pid || -1;
  //   for(let i = 0 ;i<data.length;i++){
  //     if(data[i]){
  //       if(data[i].pid == curpid){
  //         tree.push(data[i]);
  //       }
  //     }
  //   }
  //   for(let i = 0;i<tree.length;i++){
  //     if(tree[i]){
  //       let children = resursion(data,tree[i].id);
  //       if(children && children.length){
  //         tree[i].children = children
  //       }
  //     }
  //   }
  //   return tree;
  // };
  trans(data);

  useEffect(()=>{
    // trans(data);
    // tree = resursion(data)
    // console.log(tree);
  },[])


  return (
    <div style={{ border: '6px solid #f56565', borderRadius: '0.5rem', padding: '1rem', 
      height:'30rem'
    }}
      id='b'
      ref = {ref}
    >
      <Tree tree={tree} />
      
    </div>
  )
}
