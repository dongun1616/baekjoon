#include <iostream>

using namespace std;
int main()
{
    int A, B, C;

    cin >> A >> B >> C;

    if ((A == B) && (B == C))
    {
        cout << 10000 + A*1000 << endl;
    }
    else if ((A == B) || (A == C))
    {
        cout << 1000 + A*100 << endl;
    }   
    else if (B == C)
    {
        cout << 1000 + B*100 << endl;
    }            
    else
    {
        cout << max(max(A,B),C)*100 << endl; //최대비교함수 max
    }
    
    return 0;
}
