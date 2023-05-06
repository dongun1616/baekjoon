#include <iostream>

using namespace std;
int main()
{
    int n, x, X, N;
    int price = 0;
    cin >> X >> N;

    for(int i=0;i<N;i++)
    {
        cin >> x >> n;
        price += (x*n);    
    }

    if(X == (price))
    {
        cout << "Yes\n";
    }
    else
    {
        cout << "No\n";
    }

    return 0;
}