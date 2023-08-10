//vertex / node
//2 vertex conn by edge
//no limitation to how many verticies a vetex can conn
//edges have speed / traffic // weihted
//edges can b single directional
//but we gonna build non weighted  bi directional edges
////////adjecency matrix O(V^2) adding new vertex , O(1) adding edge , O(1) removing edge ,  removing vertex O(V^2)
///////// adjacency list O(1) aDDING NEW VERTEX , O(1) adding edge , O(Edges) , removing vertex O(V + E)
/**{
 * A:[`b` , `e`]
 * B:[`a` , `c`]
 * ........} */
class Graph {
  constructor() {
    this.adjencyList = {};
  }
  addVertex(v) {
    if (!this.adjencyList[v]) {
      this.adjencyList[v] = [];
      return true;
    }
    return false;
  }
  addEdge(v1, v2) {
    if (this.adjencyList[v1] && this.adjencyList[v2]) {
      this.adjencyList[v1].push(v2);
      this.adjencyList[v2].push(v1);
      return true;
    }
    return false;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}
