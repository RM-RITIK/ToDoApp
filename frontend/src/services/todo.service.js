import http from  "../http-common"

class TodoDataService {
    getAll() {
        return http.get("/board/get-all");
    }
    createBoard(data) {
        return http.post("/board/create", data);
    }
    addItemtoBoard(data) {
        return http.post("/boarditem/create", data);
    }

}

export default new TodoDataService();