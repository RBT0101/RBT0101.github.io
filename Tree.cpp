#include <iostream>

class Node
{
	private:
		Node *leftNode;
		Node *rightNode;
		int data;

	public:
		Node(){}
		Node(int data){
			this->data = data;
		}

		Node *getLeftNode(){return leftNode;};
		Node *getRightNode(){return rightNode;};

		int getData() {return data;}
		int printStr(int data){return data;}
	
		void setNode(Node *node){this = node;}
		void setData(int data){this->data=data;}
		void setLeftNode(Node *node){this->leftNode = node;}
};

class Tree
{
	private:
		Node *root;

	public:
		Tree(){
			root = nullptr;
		};
		void insertNode(Node *node){
				insert(root, node);
		}
		
		void insert(Node *currentNode, Node *newNode){
			if (currentNode == nullptr){
				std::cout << "nullptr reached" << "\n";
				currentNode = newNode;
				std::cout << currentNode->getData() << "\n";
				std::cout << "Data Attemption Above" << "\n";
				return;
			}
			else{
				if (currentNode->getLeftNode() == nullptr){
					insert(currentNode->getLeftNode(), newNode);
				}
				else if (currentNode->getRightNode() == nullptr){
					insert(currentNode->getRightNode(), newNode);
				}
				else{
					return;
				}
			}
		}

		void prtTree(){
			Node *tracker = root;
			prtTreeData(tracker);
		}

		void prtTreeData(Node *node){
			if (node == nullptr) return;
			else{
				std::cout << "Data Attemption at prtTreeData()" << "\n";
				std::cout << node->getData() << " ";
				prtTreeData(node->getLeftNode());
				prtTreeData(node->getRightNode());
			}
		}
};

int main()
{
	Tree *tree = new Tree();
	tree->insertNode(new Node(3));
	//tree->insertNode(new Node(4));
	tree->prtTree();
	return 0;
}
