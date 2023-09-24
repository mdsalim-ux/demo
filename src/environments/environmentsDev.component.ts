export const enviromentDev ={
    
    production:true,
    timeout:30,
}
if(enviromentDev.production){
    if(!(window as any).console){
        (window as any).console={};
    }
    const methods=['log','warn','error','debug','info']
    for(const method of methods){
        (window as any).console[method]=()=>{}
    }
}
