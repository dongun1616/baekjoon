#include <iostream>

using namespace std;
int main()
{
    int A, B;

    cin >> A >> B;
    
    /*if (A>B)
    {
        cout << ">\n";
    }
    else if (A<B)
    {
        cout << "<\n";
    }
    else 
    {
        cout << "==\n";
    }*/

    cout << ((A > B) ? ">" : (A < B) ? "<" : "==");

    return 0;
}