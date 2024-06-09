db.createCollection('Customers', {validator: {$jsonSchema: {bsonType: 'object',title: 'Customers',required: ['addres_id','first_name','last_name','age','gender','email','phone','fax'],properties:{addres_id:{bsonType: 'object',title: 'object',required: ['street','postal_code','city','region_name','state_name'],properties:{street:{bsonType: 'string'},postal_code:{bsonType: 'string'},city:{bsonType: 'string'},region_name:{bsonType: 'string'},state_name:{bsonType: 'string'}}},first_name:{bsonType: 'string'},last_name:{bsonType: 'string'},age:{bsonType: 'string'},gender:{bsonType: 'string'},email:{bsonType: 'string'},phone:{bsonType: 'string'},fax:{bsonType: 'string'},reviews:{bsonType: 'array',items:{title: 'object',required: ['rating','review_text','review_date'],properties:{rating:{bsonType: 'string'},review_text:{bsonType: 'string'},review_date:{bsonType: 'string'},products:{bsonType: 'array',items:{title: 'object',required: ['product_name','unit_price','units_in_stock'],properties:{product_name:{bsonType: 'string'},unit_price:{bsonType: 'string'},units_in_stock:{bsonType: 'string'},Categories:{bsonType: 'array',items:{title: 'object',required: ['category_name','category_descripton','subCategory_name'],properties:{category_name:{bsonType: 'string'},category_descripton:{bsonType: 'string'},subCategory_name:{bsonType: 'string'}}}},stocks:{bsonType: 'object',title: 'object',required: ['quantity_available','reorder_level','reorder_quantity','warehouse_location'],properties:{quantity_available:{bsonType: 'string'},reorder_level:{bsonType: 'string'},reorder_quantity:{bsonType: 'string'},warehouse_location:{bsonType: 'string'}}},suppliers:{bsonType: 'object',title: 'object',required: ['company_name','phone','email','fax'],properties:{company_name:{bsonType: 'string'},phone:{bsonType: 'string'},email:{bsonType: 'string'},fax:{bsonType: 'string'}}}}}}}}},orders:{bsonType: 'array',items:{title: 'object',required: ['orderDate','shipDate','order_details_name','segments_name','shopmodes_name'],properties:{orderDate:{bsonType: 'string'},shipDate:{bsonType: 'string'},order_details_name:{bsonType: 'string'},segments_name:{bsonType: 'string'},shopmodes_name:{bsonType: 'string'}}}}}}}});