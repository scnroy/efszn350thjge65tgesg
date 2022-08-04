import os
from pyairtable import Table

api_key = os.environ["AIRTABLE_API_KEY"]
base_id = 'app2Hr6qhr1thTJAm'
table_name = 'tbl2ZHPCooDoELgUk'

table = Table(api_key, base_id, table_name)

print(table.all())