// database
let calendar = [
{
	"id": "1",
	"culture": "mais",
	"cycle": "intermedaires",
	"variete": "IRAT 200 VOLASOA",
	"Prepa_sol_start": "2020-11-01",
	"prepa_sol_end": "2020-11-30",
	"semis_start": "2020-11-21",
	"semi_end": "2020-12-31",
	"fert_1_sart": "2020-11-01",
	"fert_1_end": "2021-09-30",
	"fert_2_start":	"2020-11-30",
	"fert_2_end": "2020-12-11",
	"sarc_1_start":	"2020-12-11",
	"sarc_1_end": "2021-01-20",
	"but_1_start": "2020-12-11",
	"but_1_end": "2021-01-20",
	"rec_start": "2021-03-21",
	"rec_end": "2021-04-30",
	"Region": "alaotra",
	"fert_3_start":	"2021-01-01",
	"fert_3_end": "2021-02-10",
	"but_2_start": "2021-01-01",
	"but_2_end": "2021-02-10",
	"sarc_2_start":	"2021-01-01",
	"sarc_2_end": "2021-02-10",
	"rep_start": "null",
	"rep_end": "null",
	"published_at":	"2021-09-29T03:09:54.009Z",
	"created_at": "2021-09-29T03:09:51.020Z",
	"updated_at": "2021-09-29T04:21:45.009Z",
}
]

let db = null;

function create_db(){
	const request = window.indexedDB.open('Mydatabase');

	request.onerror = function(event){
		console.log("Problem opening DB");
	}

	request.onupgradeneeded = function(event){
		db = event.target.result;

		const store = db.createObjectStore('calendar', {keyPath: 'id'});

		store.transaction.oncomplete = function(event) {
			console.log("id store Successfully completed");
		}
	}

	request.onsuccess = function(event){
		db = event.target.result;

		console.log("Successfully opening DB");

		// insert_record(calendar);
	}
}

function delete_db(){
	const request = window.indexedDB.deleteDatabase('Mydatabase');

	request.onsuccess = function(event){
		console.log("DB Successfully deleted");
	}
}

// create_db();
// delete_db();

// function insert_record(records){
// 	if(db){
// 		const insert_transaction = db.transaction('calendar', 'readwrite');
// 		const store = insert_transaction.objectStore('calendar');


// 		insert_transaction.onerror = function(){
// 			console.log("Problem with transactions");
// 		}

// 		insert_transaction.onsuccess = function(){
// 			console.log("All transactions complete");
// 		}

// 		records.forEach(record=>{
// 		let request = store.add(record);

// 			request.onerror = function(event){
// 			console.log("Could not add", record);
// 			}

// 			request.onsuccess = function(event){
// 			console.log("Successfully added", record);
// 			}
// 		});
// 	}
// }

// function get_record(id){
// 	if(db){
// 		const get_transaction = db.transaction('calendar', 'readonly');
// 		const store = get_transaction.objectStore('calendar');


// 		get_transaction.onerror = function(){
// 			console.log("Problem with transactions");
// 		}

// 		get_transaction.onsuccess = function(){
// 			console.log("All transactions complete");
// 		}

// 		let request = store.get(id);

// 		request.onerror = function(event){
// 		console.log("Could get", id);
// 		}

// 		request.onsuccess = function(event){
// 		console.log("Successfully retrieved", event.target.result);
// 		}
// 	}
// }

// function update_record(){
// 	if(db){
// 		const update_transaction = db.transaction('calendar', 'readwrite');
// 		const store = update_transaction.objectStore('calendar');


// 		update_transaction.onerror = function(){
// 			console.log("Problem with transactions");
// 		}

// 		update_transaction.onsuccess = function(){
// 			console.log("All transactions complete");
// 		}

// 		records.forEach(record=>{
// 		let request = store.add(record);

// 			request.onerror = function(event){
// 			console.log("Could not updated", record);
// 			}

// 			request.onsuccess = function(event){
// 			console.log("Successfully update", record);
// 			}
// 		});
// 	}
// }

// function delete_record(){
// 	if(db){
// 		const delete_transaction = db.transaction('calendar', 'readwrite');
// 		const store = delete_transaction.objectStore('calendar');


// 		delete_transaction.onerror = function(){
// 			console.log("Problem with transactions");
// 		}

// 		delete_transaction.onsuccess = function(){
// 			console.log("All transactions complete");
// 		}

// 		records.forEach(record=>{
// 		let request = store.add(record);

// 			request.onerror = function(event){
// 			console.log("Could not deleted", record);
// 			}

// 			request.onsuccess = function(event){
// 			console.log("Successfully delete", record);
// 			}
// 		});
// 	}
// }
