export default {
  that : function(statement, message) {
      if (!statement) {
        throw new Error("false assertion: " + message);
      }
  }
}
