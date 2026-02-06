import {CollectionConfig} from 'payload';

const Study : CollectionConfig = {
    slug:'studies',
    fields: [
        {
          name:'title',
          label:'Title' ,
          type:'text',
          required:true,
        },

    ]
}
export default Study;
