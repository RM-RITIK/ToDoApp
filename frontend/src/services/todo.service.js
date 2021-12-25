import http from  "../http-common"

class TodoDataService {
    getAll() {
        return http.get("/board/get-all");
    }
    createBoard() {
        return http.post("/board/create", data);
    }
    addItemtoBoard() {
        return http.post("/boarditem/create", data);
    }

}

export default new TodoDataService();